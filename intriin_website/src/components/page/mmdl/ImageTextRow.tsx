import { Col, Row, Space } from "antd"
import Title from "antd/es/typography/Title"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

interface Props{
    imageAtRight?:boolean,
    textHeading: string,
    text:string
    imageSrc: string | StaticImport
}
const ImageTextRow :React.FC<Props> = (props: Props) =>{
    let output = null
    if(props.imageAtRight){
        output = (
        <Row gutter={[0,0]} align="middle" style={{padding: 30, textAlign:"center"}}>
            <Col md={15}>
            <Space align="center" direction="vertical" style={{}}>
                <Title level={3}>{props.textHeading}</Title>     
                <div>{props.text}</div>                        
            </Space>
            </Col>
            <Col  md={9}>
            <Image alt="About" width={0} style={{ width: '100%', height:"300px"}}sizes="100vw" height={0} src={props.imageSrc} />
            </Col>
        </Row>

        )
            
    }else{
        output = (
        <Row gutter={[0,0]} align="middle" style={{padding: 30, textAlign:"center"}}>
            <Col  lg={9}>
            <Image alt="About" width={0} style={{ width: '80%', height:"300px"}}sizes="100vw" height={0} src={props.imageSrc} />
            </Col>
            <Col lg={13}>
            <Space align="center" direction="vertical" style={{}}>
                <Title level={3}>{props.textHeading}</Title>     
                <div>{props.text}</div>                        
            </Space>
            </Col>

        </Row>

        )
    }
    return output
}

export default ImageTextRow