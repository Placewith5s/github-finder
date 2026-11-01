const main = async() => {
    const main_elem: HTMLElement = document.body.
    querySelector("main");
    const repo_info: HTMLUListElement = main_elem.
    querySelector("ul#repo-info");

    const finder: HTMLInputElement | null = main_elem.
    querySelector("input#finder");
    const search_btn: HTMLButtonElement | null = main_elem.
    querySelector("button#search-btn");

    if (!finder ||
        !search_btn)
    {
        throw new Error(
            "Invalid finder or search button!"
        );
    }

    console.info("Loaded finder and search elements");

    const start: string = "https://api.github.com/";
    let user: string = "";

    let debounce: boolean = false;

    search_btn.addEventListener("click", async() => {
        if (finder.value.trim() == "")
            return;

        if (!debounce)
            debounce = true;

        user = finder.value;

        console.info(`User searched: ${user}`);

        setTimeout(() =>
        {
            debounce = false;
        }, 300);

        const res: Response = await fetch(
            `${start}users/${user}/repos`
        );

        if (!res.ok)
        {
            alert(`Invalid response! Error code: ${res.status}`);
            return;
        }

        const data = await res.json();
        // console.info(`JSON data: ${JSON.stringify(data)}`);

        for (const repo of data)
        {
            console.log(repo);
            
            const repo_title: HTMLLIElement = document.createElement(
                "li"
            );
            const repo_desc: HTMLLIElement = document.createElement(
                "li"
            );
            const strong_elem: HTMLElement = document.createElement(
                "strong"
            );

            const repo_url_holder: HTMLLIElement = document.createElement(
                "li"
            );
            const repo_url: HTMLAnchorElement = document.createElement(
                "a"
            );

            repo_title.id = "repo-title";
            repo_desc.id = "repo-desc";
            repo_url_holder.id = "repo-url";

            repo_title.textContent = "Title: ";
            strong_elem.textContent = repo["name"];
            repo_desc.textContent = `Description: ${repo["description"]}`;
            repo_url_holder.textContent = "Link: "

            repo_url.textContent = repo["name"];
            repo_url.title = "opens in a new tab";
            repo_url.href = repo["html_url"];
            repo_url.rel = "noopener, noreferrer";

            repo_info.appendChild(repo_title);
            repo_info.appendChild(repo_desc);
            repo_info.appendChild(repo_url_holder);

            repo_url_holder.appendChild(repo_url);
            repo_title.appendChild(strong_elem);
        }
    });
};

main();