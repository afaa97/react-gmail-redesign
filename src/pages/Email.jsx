import Section1 from '../containers/Section1'
import Section2 from '../containers/Section2'
import Section3 from '../containers/Section3'

const Email = () => {
    return (
        <main className="flex flex-col items-center h-screen justify-center bg-gradient-to-r from-[#EB434D] to-[#B6242D]"> {/* Background */}
            <div className="flex w-11/12 h-screen m-10 p-5 bg-white rounded-[15px] shadow-lg"> {/* Box */}
                <Section1 />
                <Section2 />
                <Section3 />
            </div>
        </main>
    )
}

export default Email