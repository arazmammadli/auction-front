import { Spin } from "antd";

export default function Loading() {
    return <div className='flex justify-center py-5'>
        <Spin style={{ fontSize: "22px" }} />
    </div>
}