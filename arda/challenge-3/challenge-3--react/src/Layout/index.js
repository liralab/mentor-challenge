import Header from "../Components/Header";

export default function Layout({ children }) {
    return(
        <div className="bg-amber-100 h-screen">
           <Header/>
           { children }
        </div>
    )
};