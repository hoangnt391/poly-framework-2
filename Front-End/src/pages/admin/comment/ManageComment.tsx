import { Table, Button, Empty, message, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { DeleteOutlined } from "@ant-design/icons"
import Icomments from '../../../types/Comments';
import { GetAllcomment, Removecomment } from '../../../services/comments';

const ManageComment = () => {
  const [coments, setcoments] = useState<Icomments[]>([])
  useEffect(() => {
    GetAllcomment().then(({ data }) => setcoments(data))
  }, [])

  const HandleRemoveUser = async (id: string) => {
    try {
      Modal.confirm({
        title: 'Confirm',
        content: 'Are you sure you want to delete this about?',
        okText: 'Yes',
        cancelText: 'No',
        okButtonProps: {
          className: "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" // áp dụng lớp CSS
        },
        onOk: async () => {
          const loading = message.loading({ content: 'Loading...', duration: 0 });
          setTimeout(async () => {
            if (loading) {
              loading();
            }
            const response = await Removecomment(id);
            if (response) {
              message.success('xóa người dùng thành công!', 3);
              const dataNew = coments.filter((data) => data._id !== id);
              setcoments(dataNew);
            }
          }, 2000);
        },
        onCancel: () => {
          message.success('Canceled!');
        },
      });
    } catch (error: any) {
      message.error(error.response.data.message, 5);
    }
  };
  const columns = [
    {
      title: 'stt',
      dataIndex: 'index',
      key: 'index'
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'role',
      dataIndex: 'role',
      key: 'role'
    },
    {
      title: 'created At',
      dataIndex: 'createdAt',
      key: 'createdAt'
    },
    {
      title: 'action',
      render: (item: Icomments) => <>
        {item.role === 'admin' ? <Button hidden>delete</Button> :
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => HandleRemoveUser(item.key)} ><DeleteOutlined /></button>
        }
      </>
    },
  ];

  const data = coments.map((item: Icomments, index: number) => {
    return {
      index: index,
      key: item._id,
      name: item.name,
      email: item.email,
      role: item.role,
      createdAt: item.createdAt,
    }
  })
  if (data.length == 0)
    return (
      <Empty description={false} />
    )
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        pagination={{ pageSize: 4, showQuickJumper: true }}
      />
    </>
  )
}

export default ManageComment