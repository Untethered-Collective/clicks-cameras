import {useMatches} from '@remix-run/react';

export default function UspBar() {

    const [root] = useMatches();
    const uspBarData = root?.data?.layout?.uspBar;

    console.log(uspBarData, 'uspBarData')

    return (
        <div className="w-full bg-black text-white top-0 lg:flex uspbar fixed left-0 z-50">
            {uspBarData && (
                <ul className="flex w-full">
                    <li className="w-1/3 flex justify-center p-2">{uspBarData.usp1}</li>
                    <li className="w-1/3 flex justify-center p-2">{uspBarData.usp2}</li>
                    <li className="w-1/3 flex justify-center p-2">{uspBarData.usp3}</li>
                </ul>
            )}
        </div>
    )
}