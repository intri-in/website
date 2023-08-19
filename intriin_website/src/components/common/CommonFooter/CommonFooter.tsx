"use client";
import { GithubOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { Footer } from "antd/es/layout/layout"
import Link from "next/link";
import { useRouter } from "next/navigation";

const CommonFooter = () =>{
    const router = useRouter()
    const gotoGithub = () =>{
        router.push("https://github.com/intri-in/")
    }
    return(
        <Footer style={{ textAlign: 'center' }}>
            <Row>
                <Col lg={12}>
                © 2023 Intri.IN 
                </Col>
                <Col lg={12}>
                     <GithubOutlined onClick={gotoGithub} style={{fontSize: 24}} />
                </Col>
            </Row>
        </Footer>
        
    )
}

export default CommonFooter