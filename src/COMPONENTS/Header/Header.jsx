import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center border-b-2 p-4 container mx-auto'>
            <h1 className='text-4xl font-bold'>Knowledge cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;