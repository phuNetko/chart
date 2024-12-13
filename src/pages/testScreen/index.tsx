import { useFormik } from 'formik';

export default function SignupForm() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-2 '>
            <div className='flex flex-row gap-1 w-[400px] justify-between'>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className='border '
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
            </div>
            <div className='flex flex-row gap-1 w-[400px] justify-between'>
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className='border '
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
            </div>


            <div className='flex flex-row gap-1 w-[400px] justify-between'>
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    className='border '
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};