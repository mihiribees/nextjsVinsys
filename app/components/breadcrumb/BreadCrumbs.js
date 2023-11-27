'use client'
import { usePathname } from 'next/navigation'
import "./breadcrumb.css";
import { AiFillChrome, AiFillHome } from "react-icons/ai";
import Link from 'next/link'



const BreadCrumbs = () => {

    const location = usePathname();
    const pathnames = location.split('/').filter((x) => x);


    return (
        <>
            <ul className='breadcrumbs'>
                <div className='bgground d-flex'>
                    <li>
                        <Link href="/"><AiFillHome /></Link>
                    </li>

                    {pathnames.map((value, index) => {
                        
                        const last = index === pathnames.length - 1;

                        return last ? (
                            <>
                                {
                                    pathnames.indexOf("inveshrefr") === -1 && <>
                                        <li key={value}>{value.replace(/-/g, " ")}</li>
                                    </>
                                }

                            </>

                        ) : (
                            <>
                                {
                                    pathnames.includes("investor") ? <>
                                        <li key={value}>
                                            <Link key={value} href={`/investor/board-of-director`}>Investor</Link>
                                        </li>
                                    </> : <>
                                        <li key={value}>
                                            <Link key={value} href={`/${pathnames.slice(0, index + 1).join("/")}`}>{value.replace(/-/g, " ")}</Link>

                                        </li>

                                    </>

                                }

                            </>

                        );
                    })}

                </div>

            </ul>

        </>
    )
}

export default BreadCrumbs;


