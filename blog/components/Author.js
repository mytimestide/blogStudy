import { Avatar, Divider} from 'antd'
import '../static/style/components/author.css'

const Author = ()=>{
    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="https://bursarstorage.blob.core.windows.net/photo/14b5a60d-803c-4b85-aeaf-ba143483bf95"  /></div>
            <div className="author-introduction">
              专注于WEB前端开发。此地维权无门，此时无能为力，此心随波逐流。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account"  />
                <Avatar size={28} icon="qq"  className="account" />
                <Avatar size={28} icon="wechat"  className="account"  />

            </div>
        </div>
    )
}

export default Author
