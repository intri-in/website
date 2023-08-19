"use client";
import { ConfigProvider, Layout, Menu } from 'antd';
import theme from '@/theme/themeConfig';
import Image from 'next/image';
import logo from '@/../public/logo_transparent.png'
import {  useRouter } from 'next/navigation';
const CommonHeader: React.FC= () =>{

    const router = useRouter()
    const navLinkClicked = (e:any) =>{
        if(e.key){
            switch(e.key){
                case "homeLink":
                    router.push("/")
                default:
                    return
            }
        }
    }
    return(
        <ConfigProvider theme={theme}>
            <Layout.Header style={{backgroundColor:theme.token?.colorBgContainer, display: 'flex', alignItems: 'center' }}>  
            <Image height={50} alt='Logo' src={logo} />
            <Menu
            onClick={navLinkClicked}
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items={
                [
                    {
                        key: 'homeLink',
                        label:"Home"

                    },
                    {
                        key: 'MMDL',
                        label:"Manage My Damn Life"

                    },
                   
                ]
            }
            />
            </Layout.Header>

        </ConfigProvider>
    )              
}

export default CommonHeader;