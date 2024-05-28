import React from "react";
import type { TableColumnsType } from "@/global/types/table.type";

type Props = {
    columns: TableColumnsType[];
    children: React.ReactNode;
}

export function Table({ columns, children }: Props) {
    return (
        <div className="relative">
            <table className="w-full min-w-max lg:min-w-full table-auto text-sm text-left">
                <thead className="text-xs font-medium leading-[18px] bg-[#F2F4F5] text-[#475156] uppercase">
                    <tr>
                        {
                            columns.map((c) => (
                                <th key={c.key} scope="col" className="px-6 py-3">
                                    {c.head}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    )
}