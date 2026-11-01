export const helper = (args: {checked: boolean, checked_data: boolean, id: string, parent: HTMLElement, found_msg: string, what_log: string}) =>
{
    if (args.checked)
    {
        console.info("Showing public repositories...");

        if (args.checked_data)
        {
            console.info(args.found_msg ?? "Found");

            const checkbox: HTMLInputElement = document.createElement(
                "input"
            );
            
            checkbox.type = "checkbox";
            checkbox.id = args.id;
            checkbox.setAttribute("checked", "");
            checkbox.disabled = true;

            if (args.parent)
                args.parent.appendChild(checkbox);
        }
    } else
    {
        console.info(
            `Showing non-${args.what_log} public repositories...`
        );
    }
}