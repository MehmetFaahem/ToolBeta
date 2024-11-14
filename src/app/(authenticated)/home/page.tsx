'use client'

import { Typography, Card, Input, Button, Row, Col, List, Space } from 'antd'
import {
  InstagramOutlined,
  FacebookOutlined,
  HistoryOutlined,
  DownloadOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [url, setUrl] = useState('')

  // Fetch tools
  const { data: tools } = Api.tool.findMany.useQuery({
    where: { isActive: true },
  })

  // Fetch recent activities
  const { data: recentActivities } = Api.recentActivity.findMany.useQuery({
    where: { userId: user?.id },
    include: { tool: true },
    orderBy: { createdAt: 'desc' },
    take: 5,
  })

  // Initialize mutation at component root level
  const { mutateAsync: createActivity } =
    Api.recentActivity.create.useMutation()

  const handleToolClick = async (toolId: string) => {
    if (!url) {
      enqueueSnackbar('Please enter a URL first', { variant: 'error' })
      return
    }

    try {
      await createActivity({
        data: {
          sourceUrl: url,
          activityType: 'PROCESS',
          status: 'PENDING',
          userId: user?.id,
          toolId: toolId,
        },
      })
      enqueueSnackbar('Processing started', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to process URL', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Social Media Tools</Title>
        <Text>
          Process your Instagram and Facebook content with our powerful tools
        </Text>

        <Card style={{ marginTop: 24 }}>
          <Input
            size="large"
            placeholder="Enter Instagram or Facebook URL"
            value={url}
            onChange={e => setUrl(e.target.value)}
            prefix={<InstagramOutlined style={{ marginRight: 8 }} />}
            style={{ marginBottom: 24 }}
          />

          <Row gutter={[16, 16]}>
            {tools?.map(tool => (
              <Col key={tool.id} xs={24} sm={12} md={8} lg={6}>
                <Card
                  hoverable
                  onClick={() => handleToolClick(tool.id)}
                  style={{ height: '100%' }}
                >
                  <Space
                    direction="vertical"
                    align="center"
                    style={{ width: '100%' }}
                  >
                    {tool.type === 'INSTAGRAM' ? (
                      <InstagramOutlined style={{ fontSize: 24 }} />
                    ) : (
                      <FacebookOutlined style={{ fontSize: 24 }} />
                    )}
                    <Title level={4}>{tool.name}</Title>
                    <Text>{tool.description}</Text>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>

        <Card style={{ marginTop: 24 }}>
          <Title level={3}>
            <HistoryOutlined /> Recent Activity
          </Title>
          <List
            dataSource={recentActivities}
            renderItem={activity => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    activity.tool?.type === 'INSTAGRAM' ? (
                      <InstagramOutlined />
                    ) : (
                      <FacebookOutlined />
                    )
                  }
                  title={activity.tool?.name}
                  description={
                    <Space>
                      <Text type="secondary">{activity.sourceUrl}</Text>
                      <Text type="secondary">{activity.status}</Text>
                    </Space>
                  }
                />
                <Button
                  type="link"
                  icon={<DownloadOutlined />}
                  onClick={() => router.push('/downloads')}
                >
                  View Downloads
                </Button>
              </List.Item>
            )}
          />
        </Card>
      </div>
    </PageLayout>
  )
}
