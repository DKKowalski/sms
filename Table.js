import safetyLogo from "../Assets/safety.png";
/*import safetyLogo from "../Assets/safety.png";
import safetyLogo from "../Assets/safety.png";
import safetyLogo from "../Assets/safety.png";
import safetyLogo from "../Assets/safety.png";
import safetyLogo from "../Assets/safety.png";*/

const Row = () => {
    return (
        <tr>
            <div>
                <tr>
                    <td className="italics font-bold text-md text-pink-700">
                        what we offer
                    </td>
                </tr>
                <td className="pt-5 pb-5">
                    <div className="text-center font-bold text-pink-700">
                        <a>Safety first</a>
                    </div>
                    <div className="px-7 flex items-center space-x-2">
                        <div className="flex-shrink-0">
                            <img src={safetyLogo} className="h-10 w-10" />
                        </div>
                        <div>
                            <p className="text-sm">We ensure safety of students in school on high priority</p>
                        </div>
                    </div>
                </td>
                <td className="pt-5 pb-5">
                    <div className="text-center font-bold text-pink-700">
                        <a>Regular classes</a>
                    </div>
                    <div className="px-64 flex items-center space-x-2">
                        <div className="flex-shrink-0">
                            <img src={safetyLogo} className="h-10 w-10" />
                        </div>
                        <div>
                            <p className="text-sm">our teachers are very punctual and they tale their classes regularly</p>
                        </div>
                    </div>
                </td>
            </div>
            <div>
                <td className="pt-5 pb-5">
                    <div className="text-center font-bold text-pink-700">
                        <a>Certified Teachers</a>
                    </div>
                    <div className="px-7 flex items-center space-x-2">
                        <div className="flex-shrink-0">
                            <img src={safetyLogo} className="h-10 w-10" />
                        </div>
                        <div>
                            <p className="text-sm">our teachers are well trained and they convert study burden into fun</p>
                        </div>
                    </div>
                </td>
                <td className="pt-5 pb-5">
                    <div className="text-center font-bold text-pink-700">
                        <a>Sufficient classrooms</a>
                    </div>
                    <div className="px-64 flex items-center space-x-2">
                        <div className="flex-shrink-0">
                            <img src={safetyLogo} className="h-10 w-10" />
                        </div>
                        <div>
                            <p className="text-sm">we have seperate classroom for each class and section, so that students can concentrate on their subjects</p>
                        </div>
                    </div>
                </td>
            </div>
            <div>
                <td className="pt-5 pb-5">
                    <div className="text-center font-bold text-pink-700">
                        <a>Creative Lessons</a>
                    </div>
                    <div className="px-7 flex items-center space-x-2">
                        <div className="flex-shrink-0">
                            <img src={safetyLogo} className="h-10 w-10" />
                        </div>
                        <div>
                            <p className="text-sm">we teach the student out of the box and make them creative through our regular events</p>
                        </div>
                    </div>
                </td>
                <td className="pt-5 pb-5">
                    <div className="text-center font-bold text-pink-700">
                        <a>Sports facilities</a>
                    </div>
                    <div className="px-7 flex items-center space-x-2">
                        <div className="flex-shrink-0">
                            <img src={safetyLogo} className="h-10 w-10" />
                        </div>
                        <div>
                            <p className="text-sm">we keep our students healty and fit through our sports activities</p>
                        </div>
                    </div>
                </td>
            </div>
        </tr>
    )
}

const Table = () => {
    return (
        <div className="max-w-9xl max-auto grid-rows-3 pt-20 pl-5">
            <div>
                <div className="px-10">
                    <table className="flex items-center">
                        <thead>
                        </thead>
                        <tbody className="divide-y">
                            <Row />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default Table;