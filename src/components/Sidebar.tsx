import {useState, useEffect} from 'react';

interface User {
    id: number,
    user: String,
}
function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [count, setCount] = useState(0);
    // const [user, setUser] = useState<User[] | null>(null);
    const [liked, setLiked] = useState(true);
    const [text, setText] = useState('Akhila');
    useEffect(() => {
        count
    }, [setIsOpen])
    function handleChange(e) {
        setText(e.target.value);
        setLiked(e.target.checked);
    }
    return (
        <>
        <div>
            <input 
            value={text}
            onChange= {handleChange}
            >
            </input>
        </div>
        <div>
            <button
            onClick = {() => {
                if (isOpen) {
                setText('Akhila');
            }
            setIsOpen(!isOpen);
            }}
            >
                {isOpen? "SidebarOpen" : "SidebarClosed"}
            </button>
            <h2>typed: {text}</h2>
        </div>
        <div>
            <button
            onClick = {() => setCount(count+1)}
            >
                Count : {count}
            </button>
        </div>
        <div>
            <label>
            <input
            type="checkbox"
            checked={liked}
            onChange={handleChange}
            />
            I liked this
        </label>
        <p>You {liked ? 'liked' : 'did not like'} this.</p>
        </div>
        </>
        
    );
}

export default Sidebar;