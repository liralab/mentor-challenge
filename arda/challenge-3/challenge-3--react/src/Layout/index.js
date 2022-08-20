import Header from "../Components/Header";

export default function Layout({ children }) {
    return(
        <div className="bg-amber-100 h-screen relative">
           <Header/>
           { children }
        </div>
    )
};