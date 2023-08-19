"use client";

import PageBanner from "@/components/common/PageBanner"
import { Button, Col, ConfigProvider, Row, Space } from "antd";
import theme from '@/theme/themeConfig';
import selfhosted from '#/placeholders/selfhosted.png'
import tasks from '#/placeholders/tasks.png'
import powerful from '#/placeholders/powerful.png'
import ImageTextRow from "@/components/page/mmdl/ImageTextRow";
import multipleUsers from '#/placeholders/mutipleUsers.png'
import opensource from '#/placeholders/opensource.png'
import Home from '#/mmdl/HomeView.png'
import GanttView from '#/mmdl/GanttView.png'
import TaskView from '#/mmdl/TaskView.png'
import Image from "next/image";
import Title from "antd/es/typography/Title";
import Link from "next/link";

const MMDLPage = () =>{
    return(        
    <ConfigProvider theme={theme}>
            <PageBanner title="Manage My Damn Life" />
            <main style={{margin: theme.token?.padding}}>
                <ImageTextRow textHeading="About" text="Manage my Damn Life (MMDL) is a self-hosted front end for managing your CalDAV tasks and calendars." imageSrc={selfhosted}  />

                <ImageTextRow textHeading="A Todo & Calendar App" text="MMDL is a powerful task management and calendar app, and supports CalDAV." imageSrc={tasks} imageAtRight={true}  />

                <ImageTextRow textHeading="Packed with Features" text="Easily manage your CalDAV tasks and events on many open-source servers like NextCloud, Baikal, or Radicale." imageSrc={powerful}  />

                <ImageTextRow textHeading="Multiple Users and CalDAV Accounts Support" text="MMDL supports multiple user accounts and CalDAV accounts." imageAtRight={true} imageSrc={multipleUsers}  />
                <ImageTextRow textHeading="Open Source" text="Written in React and pure spaghetti code, MMDL is free and open souce."  imageSrc={opensource}  />

                <Row style={{alignSelf:"center"}} align="middle">
                    <Col lg={8}>
                        <Image alt="Gantt view" src={GanttView} width={300} height={0} />
                    </Col>
                    <Col lg={8}>
                        <Image alt="Gantt view" src={Home} width={300} height={0} />
                    </Col>
                    <Col lg={8}>
                        <Image alt="Gantt view" src={TaskView} width={300} height={0} />
                    </Col>
                </Row>
                <br />
                <Title level={3} style={{textAlign:"center"}} >Get Started</Title>
                <Title level={2} style={{textAlign:"center"}} >Clone on Github or try Docker Image</Title>
                <div style={{textAlign:"center", margin: 30}}>
                    <Link href="https://github.com/intri-in/manage-my-damn-life-nextjs"><Button type="primary" size="large" style={{width:300}}>Get Source Code on Github</Button></Link>
                    <br />
                    <br />
                    <Link href="https://manage-my-damn-life-nextjs.readthedocs.io/en/latest/"><Button type="primary" size="large" style={{width:300}}>Read Documentation</Button></Link>



                </div>

            </main>
    </ConfigProvider>)
}

export default MMDLPage