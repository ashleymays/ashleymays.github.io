import AnchorLink from '../AnchorLink/AnchorLink';
import './Contact.scss';

function Contact() {
    return (
        <div className='flex-col flex-al-end'>
            <AnchorLink
                href="mailto:ashleymays091@gmail.com"
                url="ashleymays091@gmail.com"
            />
            <AnchorLink
                href="https://github.com/ashleymays"
                url="github.com/ashleymays"
            />
        </div>
    )
}

export default Contact;