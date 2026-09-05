import {useState} from 'react';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [count, setCount] = useState(0);
    return (
        <div>
        <button
        onClick = {() => setIsOpen(!isOpen)}
        >
            {isOpen? "SidebarOpen" : "SidebarClosed"}
        </button>
        <button
        onClick = {() => setCount(count +1)}
        >
            Count : {count}
        </button>
        </div>
        
    );
}

export default Sidebar;