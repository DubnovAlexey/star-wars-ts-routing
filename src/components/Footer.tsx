import Button from "./ui/Button.tsx";

const Footer = () => {
    return (
        <footer className="clear-both rounded-b-3xl bg-grey h-20 grid grid-cols-8 items-center">
            <Button className={'col-start-3'}>Send me email</Button>
            <a
                href="https://github.com/DubnovAlexey/star-wars-ts-routing"
                target="_blank"
                rel="noopener noreferrer"
                className="col-start-6 col-span-2 bg-red border-1 px-3 rounded-md text-center hover:bg-red-500 hover:text-white hover:border-main"
            >Source code</a>
        </footer>
    )
}

export default Footer;