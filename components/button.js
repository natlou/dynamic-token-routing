import Link from 'next/link'
import { useRouter } from 'next/router'

const Button = () => {
    
    const { asPath, pathname } = useRouter();
    
    // get the tokens from path 
    console.log(asPath)

    const path_array = asPath.split("/")

    console.log(path_array)
    console.log(path_array.at(5))

    let tokenA = 'ETH';
    let tokenB = 'BTC';
    let path = `${tokenA}/${tokenB}`

    function changeTokenA(value) {
        tokenA = value;
        tokenB = path_array.at(3)
        path = `${tokenA}/${tokenB}`;
    }
    
    function changeTokenB(value) {
        tokenA = path_array.at(2)
        tokenB = value;
        path = `${tokenA}/${tokenB}`;
    }

    return (
        <>
        <div>
            {path_array.at(2)}/
            {path_array.at(3)}
        </div>
        <div>
            <button onClick={changeTokenA("ETH")}>
                <Link href="[[...slug]]" as={path}>
                    tokenA = ETH
                </Link>
            </button>
        </div>
        <div>
            <button onClick={changeTokenA("USDC")}>
                <Link href="[[...slug]]" as={path}>
                    tokenA = USDC
                </Link>
            </button>
        </div>
        <div>
            <button onClick={changeTokenB("ETH")}>
                <Link href="[[...slug]]" as={path}>
                    tokenB = ETH
                </Link>
            </button>
        </div>
        <div>
            <button onClick={changeTokenB("USDC")}>
                <Link href="[[...slug]]" as={path}>
                    tokenB = USDC
                </Link>
            </button>
        </div>
        </>
    )
}

export default Button 