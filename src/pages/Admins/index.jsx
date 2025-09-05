import UTable from '../../components/UTable';

const data = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        phone: { number: '911235678', homeNumber: '123' },
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'johnsmith@gmail.com',
        phone: { number: '911235678', homeNumber: '123' },
    },
];

const Admins = () => {
    return (
        <div>
            Admins
            <br />
            <br />
            <UTable
                numeric
                data={data}
                header={['Name', 'Email', 'Phone']}
                body={['name', 'email', 'phone.number']}
                handleDelete={row => console.log('Delete', row)}
                handleEdit={row => console.log('Edit', row)}
            />
        </div>
    );
};
export default Admins;
