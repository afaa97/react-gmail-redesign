import Logo from '../components/Logo'
import List from '../components/List'

const Section1 = () => {
    return(
        <div className="w-1/5 justify-center bg-red-100"> {/* Col 1 */}
            <div className="m-4">
                <div className="flex h-1/4 items-center justify-center bg-green-100">
                    <Logo />
                </div>
                <div className="flex h-96 items-center justify-center bg-purple-100">
                    <List />
                </div>
            </div>
        </div>
    )
}

export default Section1