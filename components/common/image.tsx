import {Image} from "antd";

type Props = {
    coverImg:string;
    previewImages:string[];
}
function ImagePreview(props:Props) {
    const {coverImg,previewImages} = props;

    return (
        <Image.PreviewGroup
            items={previewImages}
        >
            <Image
                id="image-preview"
                width={150}
                src={coverImg}
                className="object-cover"
            />
        </Image.PreviewGroup>
    )
}

export default ImagePreview;