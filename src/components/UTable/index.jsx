import { useState } from 'react';
import { Table, Button, Popconfirm, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export default function UTable({
    data,
    header,
    body,
    numeric,
    handleEdit,
    handleDelete,
    right = [],
}) {
    const [myItem, setItem] = useState(null);

    const resolveKey = (item, path) => {
        const keys = path.split('.');
        return keys.reduce(
            (obj, key) => (obj && obj[key] !== undefined ? obj[key] : ''),
            item
        );
    };

    const columns = [];

    if (numeric) {
        columns.push({
            title: '№',
            dataIndex: 'index',
            key: 'index',
            render: (_, __, index) => index + 1,
            width: 50,
            align: 'center',
        });
    }

    header.forEach((title, i) => {
        columns.push({
            title,
            key: body[i],
            dataIndex: body[i],
            align: right.includes(i + 1) ? 'right' : 'left',
            render: (_, record) => resolveKey(record, body[i]),
        });
    });

    if (handleDelete || handleEdit) {
        columns.push({
            title: 'Amallar',
            key: 'actions',
            align: 'center',
            width: 120,
            render: (_, record) => (
                <Space>
                    {handleEdit && (
                        <Button
                            type='primary'
                            icon={<EditOutlined />}
                            onClick={() => handleEdit(record)}
                        />
                    )}
                    {handleDelete && (
                        <Popconfirm
                            title="O'chirishni xohlaysizmi?"
                            okText='Ha'
                            cancelText="Yo'q"
                            onConfirm={() => handleDelete(record)}
                        >
                            <Button danger icon={<DeleteOutlined />} />
                        </Popconfirm>
                    )}
                </Space>
            ),
        });
    }

    return (
        <Table
            rowKey={record => record.id || record.key}
            dataSource={data}
            columns={columns}
            pagination={false}
            bordered
        />
    );
}
