import { IEmployee } from "./IEmployee"; 

export class EmployeeService { 
    emp:IEmployee[] = [ 
                { 
                    id:1, 
                    name:'Mayura', 
                    designation:'Trainer', 
                    department:'Soft Eng', 
                    Gender:'Female' 
                }, 
                { 
                    id:2, 
                    name:'Sam', 
                    designation:'HR Manager', 
                    department:'Human Resource', 
                    Gender:'Male' 
                }, 
                { 
                    id:3, 
                    name:'James', 
                    designation:'Escalation Manager', 
                    department:'Support', 
                    Gender:'Male' 
                }, 
                { 
                    id:4, 
                    name:'Smitha', 
                    designation:'Data Testing Engineer', 
                    department:'DTS', 
                    Gender:'Female' 
                }, 
                { 
                    id:5, 
                    name:'Swathi', 
                    designation:'Tech Lead', 
                    department:'Soft Eng', 
                    Gender:'Female' 
                }, 
            ]; 

    public getEmployees() 
    { 
        return this.emp; 
    } 

    public getEmployeesbyId(id:number):any 
    { 
        return this.emp.filter(e=>e.id===id) ;
    } 

    public getEmployeeCount():number 
    { 
        return this.emp.length; 
    } 

    public getFemaleEmployeeCount(): number 
    { 
        return this.emp.filter(x=>x.Gender=='Female').length; 
    } 

    public addEmployee(id:number, name:string, designation:string, department:string, gender:string ): void {
        this.emp.push({ id:id, 
                        name: name, 
                        designation: designation, 
                        department: department, 
                        Gender: gender });
    }

    public removeEmployeeById(id:number): void
    {
        let empIndex = -1;
        for (let index = 0; index < this.emp.length; index++) {
            if (this.emp[index].id === id) {
                empIndex = index;
            }
        }
        if (empIndex === -1){
            console.log("Wrong Id");
        }
        else {
            this.emp.splice(empIndex,1);
        }
        
    }
} 