import toolbox from '/images/toolbox.png'
export default function Header() {
    return (
        <>
            <a href="/">
                <img src={toolbox} className="logo react" alt="React" />
            </a>
        </>
    )
}