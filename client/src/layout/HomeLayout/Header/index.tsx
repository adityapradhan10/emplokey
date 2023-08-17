import ThemeToggle from '@/components/common/ThemeToggle';

const Header = () => (
  <div className='border-b'>
    <div className='flex items-center h-16 px-4'>
      <nav className='flex items-center gap-4'>
        <a href='#'>
          <h1 className='font-title md:text-3xl text-xl'>EmployKey</h1>
        </a>
      </nav>

      <div className='ml-auto'>
        <ThemeToggle />
      </div>
    </div>
  </div>
);

export default Header;
