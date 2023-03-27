import { GoTasklist } from 'react-icons/go'

const Header = ({setTheme}: any) => {

    const handleChangeTheme = (e: any) => {
        console.log(e.target.value)
        if (e.target.value === 'light') {
            setTheme({
            fontFamily: 'sans-serif',
            '--bg-primary': 'white',
            '--bg-secondary': 'rgba(0, 0, 0, 0.5)',
            '--bg-tertiary': 'rgb(200, 200, 200)',
            '--text-primary': 'white',
            '--text-secondary': 'black',
            '--input-text': 'black',
            '--secondary': 'white',
            '--input-alert-text': 'red',
            '--input-alert-bg': 'rgb(255, 230, 230)',})
        } else if (e.target.value === 'dark') {
            setTheme({
                fontFamily: 'sans-serif',
                '--bg-primary': 'rgb(20, 20, 30)',
                '--bg-secondary': 'rgba(0, 0, 0, 0.5)',
                '--bg-tertiary': 'black',
                '--text-primary': 'white',
                '--text-secondary': 'white',
                '--input-text': 'white',
                '--secondary': 'black',
                '--input-alert-text': 'red',
                '--input-alert-bg': 'rgb(255, 230, 230)',})
        } else if (e.target.value === 'turquoise') {
            setTheme({
                fontFamily: 'sans-serif',
                '--bg-primary': 'rgb(90, 180, 180)',
                '--bg-secondary': 'rgba(0, 0, 0, 0.5)',
                '--bg-tertiary': 'rgb(60, 120, 120)',
                '--text-primary': 'white',
                '--text-secondary': 'black',
                '--input-text': 'white',
                '--secondary': 'black',
                '--input-alert-text': 'red',
                '--input-alert-bg': 'rgb(255, 230, 230)',})
        }
    }

    return (
        <>
            <header>
                <div>
                    <h1>
                        <GoTasklist />
                        Task App</h1>
                        
                    <form>
                        <label>Theme</label>
                        <select name='theme' onChange={handleChangeTheme}>
                            <option value='light'>Light</option>
                            <option value='dark'>Dark</option>
                            <option value='turquoise'>Turquoise</option>
                        </select>
                    </form>
                </div>
            </header>
        </>
    );
};

export default Header;