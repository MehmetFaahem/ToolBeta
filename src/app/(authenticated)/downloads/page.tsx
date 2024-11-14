'use client'

import { Typography, Card, Space, Radio, Button, Row, Col, Empty } from 'antd'
import {
  DeleteOutlined,
  DownloadOutlined,
  FileImageOutlined,
  VideoCameraOutlined,
  AudioOutlined,
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

export default function DownloadsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [mediaFilter, setMediaFilter] = useState<string>('all')

  // Fetch downloads
  const { data: downloads, refetch } = Api.download.findMany.useQuery({
    where: {
      userId: user?.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  // Delete mutation
  const { mutateAsync: deleteDownload } = Api.download.delete.useMutation()

  const handleDelete = async (id: string) => {
    try {
      await deleteDownload({
        where: { id },
      })
      enqueueSnackbar('File deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Error deleting file', { variant: 'error' })
    }
  }

  const getFilteredDownloads = () => {
    if (!downloads) return []
    if (mediaFilter === 'all') return downloads
    return downloads.filter(download => download.mediaType === mediaFilter)
  }

  const getMediaIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <VideoCameraOutlined style={{ fontSize: '24px' }} />
      case 'audio':
        return <AudioOutlined style={{ fontSize: '24px' }} />
      case 'photo':
        return <FileImageOutlined style={{ fontSize: '24px' }} />
      default:
        return <DownloadOutlined style={{ fontSize: '24px' }} />
    }
  }

  return (
    <PageLayout layout="full-width">
      <Space direction="vertical" style={{ width: '100%', padding: '24px' }}>
        <Title level={2}>My Downloads</Title>
        <Text>Access and manage all your downloaded media files</Text>

        <Radio.Group
          value={mediaFilter}
          onChange={e => setMediaFilter(e.target.value)}
          style={{ marginBottom: '24px' }}
        >
          <Radio.Button value="all">All</Radio.Button>
          <Radio.Button value="video">Videos</Radio.Button>
          <Radio.Button value="audio">Audio</Radio.Button>
          <Radio.Button value="photo">Photos</Radio.Button>
        </Radio.Group>

        {getFilteredDownloads().length === 0 ? (
          <Empty description="No downloads found" />
        ) : (
          <Row gutter={[16, 16]}>
            {getFilteredDownloads()?.map(download => (
              <Col xs={24} sm={12} md={8} lg={6} key={download.id}>
                <Card
                  hoverable
                  actions={[
                    <Button
                      key="download"
                      type="link"
                      icon={<DownloadOutlined />}
                      onClick={() => window.open(download.mediaUrl, '_blank')}
                    >
                      Download
                    </Button>,
                    <Button
                      key="delete"
                      type="link"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => handleDelete(download.id)}
                    >
                      Delete
                    </Button>,
                  ]}
                >
                  <Card.Meta
                    avatar={getMediaIcon(download.mediaType)}
                    title={download.title || 'Untitled'}
                    description={
                      <Space direction="vertical">
                        <Text type="secondary">
                          {dayjs(download.createdAt).format('MMMM D, YYYY')}
                        </Text>
                        <Text type="secondary">Type: {download.mediaType}</Text>
                      </Space>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Space>
    </PageLayout>
  )
}
