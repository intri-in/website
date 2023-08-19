"use client";
import PageBanner from "@/components/common/PageBanner";
import { Button, ConfigProvider, Layout, Menu, Space } from 'antd';
import theme from '@/theme/themeConfig';
import { Col, Row } from 'antd';
import Image from "next/image";
import HomeView from '@/../public/HomeView.webp'
import { Typography } from 'antd';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const goToMMDLPage = () =>{

    router.push("/manage-my-damn-life/")
  }
  return (
    <ConfigProvider theme={theme}>
    <PageBanner title="Spaghetti Code, Resurrected" />
    <main style={{margin: theme.token?.margin}}>
      <Typography.Title level={3}>Our Products</Typography.Title>
      <div>
        <Typography.Title level={2}  style={{textAlign:"center", }}>Manage My Damn Life</Typography.Title>
        <Row align="middle" style={{padding: 30, textAlign:"center"}}>
          <Col span={12}><Image onClick={goToMMDLPage} src={HomeView} alt="MMDL" width={0} sizes="100vw" height={0}   style={{ width: '100%', height: '200px',  }}   /></Col>
          <Col span={12}>
          <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
          <Space align="center" direction="vertical" size="large" style={{}}>
              A new CalDAV client written in pure spaghetti code.
                <Button onClick={goToMMDLPage} type="primary">Learn More</Button>
              
          </Space>
          </div>
          </Col>
        </Row>
      </div>
    </main>
    </ConfigProvider>
  )
}
