import { getEmployees } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
      (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")
              for (const employeeObject of employees) {
                  if (employeeObject.id === parseInt(employeeId)) {
             

                      window.alert(`${employeeObject.name} sold ${employeeObject.sold} products`)

             
                }
            }
        }
    }
)
