import { Modal, ModalProps } from 'antd';

type Props = {} & ModalProps;

export function Dialog(props: Props) {
  return <Modal cancelButtonProps={{ hidden: true }} {...props} />;
}
