"use client"
import { ConfigProvider, Layout, Menu } from 'antd';
import theme from '@/theme/themeConfig';
import Image from 'next/image';
import logo from '@/../public/logo_transparent.png'
import { useRouter } from 'next/navigation';
const CommonHeader: React.FC= () =>{

    const router = useRouter()
    // const navLinkClicked = (e:any) =>{
    //     if(e.key){
    //         switch(e.key){
    //             case "homeLink":
    //                 router.push("/")
    //                 router.refresh()
    //             case "MMDL":
    //                 router.push("/manage-my-damn-life")
    //                 router.refresh()

    //             default:
    //                 return
    //         }
    //     }
    // }
    return(
        <ConfigProvider theme={theme}>
   
                <Layout >
                    <Layout.Header  style={{backgroundColor:theme.token?.colorBgContainer, display: 'flex', alignItems: 'center' }}>  
                <Image onClick={() =>{router.push("/")}} height={50} alt='Logo' src={logo} />
                <Menu
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={
                    [
                        {
                            key: 'homeLink',
                            label:"Home",
                            onClick:() => {router.push("/")}

                        },
                        {
                            key: 'MMDL',
                            label:"Manage My Damn Life",
                            onClick:() => {router.push("/manage-my-damn-life")}

                        },
                    
                    ]
                }
                />
                </Layout.Header>

                </Layout>

        </ConfigProvider>
    )              
}

export default CommonHeader;