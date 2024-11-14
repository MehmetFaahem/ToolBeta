'use client'

import {
  Button,
  Input,
  InputNumber,
  Typography,
  Space,
  Card,
  Row,
  Col,
  List,
} from 'antd'
import { CopyOutlined, SaveOutlined, TagsOutlined } from '@ant-design/icons'
import { useState } from 'react'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HashtagGeneratorPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [content, setContent] = useState('')
  const [hashtagCount, setHashtagCount] = useState<number>(5)
  const [generatedHashtags, setGeneratedHashtags] = useState<string>('')
  const [setName, setSetName] = useState('')

  const { data: hashtagSets, refetch: refetchSets } =
    Api.hashtagSet.findMany.useQuery({
      where: { userId: user?.id },
      include: { hashtagCombinations: true },
    })

  const generateHashtags = Api.ai.generateText.useMutation()
  const createHashtagSet = Api.hashtagSet.create.useMutation()
  const createHashtagCombination = Api.hashtagCombination.create.useMutation()

  const handleGenerate = async () => {
    try {
      const prompt = `Generate ${hashtagCount} relevant hashtags for the following content: ${content}. Return only the hashtags separated by spaces, starting with #`
      const response = await generateHashtags.mutateAsync({ prompt })
      setGeneratedHashtags(response.answer)
    } catch (error) {
      enqueueSnackbar('Failed to generate hashtags', { variant: 'error' })
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedHashtags)
      enqueueSnackbar('Hashtags copied to clipboard!', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to copy hashtags', { variant: 'error' })
    }
  }

  const handleSave = async () => {
    if (!setName) {
      enqueueSnackbar('Please enter a name for your hashtag set', {
        variant: 'error',
      })
      return
    }

    try {
      const hashtagSet = await createHashtagSet.mutateAsync({
        data: {
          name: setName,
          userId: user?.id as string,
        },
      })

      await createHashtagCombination.mutateAsync({
        data: {
          hashtags: generatedHashtags,
          count: hashtagCount,
          hashtagSetId: hashtagSet.id,
        },
      })

      enqueueSnackbar('Hashtag set saved successfully!', { variant: 'success' })
      setSetName('')
      refetchSets()
    } catch (error) {
      enqueueSnackbar('Failed to save hashtag set', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Space
            direction="vertical"
            size="large"
            style={{ width: '100%', padding: '24px' }}
          >
            <Title level={2}>
              <TagsOutlined /> Hashtag Generator
            </Title>
            <Paragraph>
              Generate relevant hashtags for your social media posts by entering
              your content or keywords below.
            </Paragraph>

            <Card>
              <Space
                direction="vertical"
                size="middle"
                style={{ width: '100%' }}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Enter your post content or keywords..."
                  value={content}
                  onChange={e => setContent(e.target.value)}
                />

                <Space>
                  <InputNumber
                    min={1}
                    max={30}
                    value={hashtagCount}
                    onChange={value => setHashtagCount(value || 5)}
                    placeholder="Number of hashtags"
                  />
                  <Button type="primary" onClick={handleGenerate}>
                    Generate Hashtags
                  </Button>
                </Space>

                {generatedHashtags && (
                  <Card>
                    <Paragraph>{generatedHashtags}</Paragraph>
                    <Space>
                      <Button icon={<CopyOutlined />} onClick={handleCopy}>
                        Copy to Clipboard
                      </Button>
                      <Input
                        placeholder="Enter set name to save"
                        value={setName}
                        onChange={e => setSetName(e.target.value)}
                        style={{ width: 200 }}
                      />
                      <Button icon={<SaveOutlined />} onClick={handleSave}>
                        Save Set
                      </Button>
                    </Space>
                  </Card>
                )}
              </Space>
            </Card>

            {hashtagSets && hashtagSets.length > 0 && (
              <Card title="Saved Hashtag Sets">
                <List
                  dataSource={hashtagSets}
                  renderItem={set => (
                    <List.Item>
                      <List.Item.Meta
                        title={set.name}
                        description={set.hashtagCombinations?.[0]?.hashtags}
                      />
                      <Button
                        icon={<CopyOutlined />}
                        onClick={() => {
                          navigator.clipboard.writeText(
                            set.hashtagCombinations?.[0]?.hashtags || '',
                          )
                          enqueueSnackbar('Hashtags copied to clipboard!', {
                            variant: 'success',
                          })
                        }}
                      >
                        Copy
                      </Button>
                    </List.Item>
                  )}
                />
              </Card>
            )}
          </Space>
        </Col>
      </Row>
    </PageLayout>
  )
}
