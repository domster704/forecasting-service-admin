import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as style from './EmployeesList.module.css'
import RowHeader from "./RowHeader/RowHeader";
import Row from "./Row/Row";
import ExcelButton from "../ExcelButton/ExcelButton";
import Pagination from "./Pagination/Pagination";


const EmployeesList = (props) => {
    const employeeStore = useSelector(state => state.employee);
    const filterStore = useSelector(state => state.filter);
    const organizations = useSelector(state => state.employee.organizations);

    const [employees, setEmployees] = React.useState(employeeStore.list);

    const dispatch = useDispatch();

    React.useEffect(() => {
        const coefficient = filterStore.sortingDirection ? 1 : -1;
        const localEmployees = [...employeeStore.list];

        localEmployees.sort((employee1, employee2) => {
            switch (filterStore.sorting) {
                case 'id':
                case 'type':
                case 'position': {
                    if (employee1[filterStore.sorting] > employee2[filterStore.sorting]) return 1 * coefficient;
                    if (employee1[filterStore.sorting] < employee2[filterStore.sorting]) return -1 * coefficient;
                    return 0;
                }
                case 'full_name': {
                    const full_name1 = `${employee1.first_name} ${employee1.last_name} ${employee1.middle_name}`;
                    const full_name2 = `${employee2.first_name} ${employee2.last_name} ${employee2.middle_name}`;
                    if (full_name1 > full_name2) return 1 * coefficient;
                    if (full_name1 < full_name2) return -1 * coefficient;
                    return 0;
                }
                case 'organization': {
                    const organization1 = organizations[employee1.work_org_id];
                    const organization2 = organizations[employee2.work_org_id];
                    if (organization1.name > organization2.name) return 1 * coefficient;
                    if (organization1.name < organization2.name) return -1 * coefficient;
                    return 0;
                }
                default:
                    return 0;
            }
        });

        setEmployees(localEmployees);
    }, [filterStore.sorting, filterStore.sortingDirection]);

    return (
        <>
            <div className={style.list}>
                <RowHeader/>
                {
                    employees.map((employee, index) => {
                        return <Row index={index + 1}
                                    employee={employee}
                                    key={index}/>
                    })
                }
            </div>
            <div className={style.footer}>
                <ExcelButton/>
                <Pagination/>
            </div>
        </>
    );
}

export default EmployeesList;