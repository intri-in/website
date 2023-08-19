import Image from 'next/image'
import styles from './styles.module.css'
import background from '@/../public/backGround.png'
interface Props{
    title: string
}
const PageBanner: React.FC<Props> = (props: Props) =>{

    return(<>
        <article className={styles.article}>
            <Image width={0} sizes="100vw" height={0}   style={{ width: '100%', height: '200px', opacity:"40%" }}  className={styles.image} src={background.src} alt="background" />
            <h3 className={styles.header}>{props.title}</h3>
    </article>
    </>)
}

export default PageBanner