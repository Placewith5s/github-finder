export const helper = (args) => {
    if (args.checked) {
        console.info("Showing all public repositories...");
        if (args.checked_str) {
            console.info(args.found_msg ?? "Found");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = args.id;
            checkbox.setAttribute("checked", "");
            checkbox.disabled = true;
            if (args.parent)
                args.parent.appendChild(checkbox);
        }
    }
    else {
        console.info(`Showing non-${args.what_log} public repositories...`);
    }
};
