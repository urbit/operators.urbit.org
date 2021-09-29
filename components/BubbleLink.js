export default function BubbleLink(props) {
    return (
        <li className={'list-none ' + props.className}>
            <a className={'flex items-center'} href={props.href} target={props.target}>
            {
                props.children
            }
            <div className="flex flex-col ml-4">
                <p className="text-black font-bold">
                    {props.title}
                </p>
                <p className="text-wall-400 font-bold">
                    {props.caption}
                </p>
            </div>
            </a>
        </li>
    )
}

BubbleLink.defaultProps = {
    className: '',
    title: '',
    caption: '',
    children: <div className="w-12 h-12 bg-wall-500 rounded-full" />,
    target: '_blank'
}