//your JS code here. If required.
 const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

        // Function to remove articles from band names
        function stripArticle(bandName) {
            return bandName.replace(/^(a|an|the)\s+/i, '').trim();
        }

        // Sort bands without articles
        const sortedBands = bands.sort((a, b) => {
            const nameA = stripArticle(a).toLowerCase();
            const nameB = stripArticle(b).toLowerCase();
            return nameA.localeCompare(nameB);
        });

        // Display the sorted bands
        const list = document.querySelector("#band");
        sortedBands.forEach((item) => {
            let li = document.createElement("li");
            li.innerText = item;
            list.append(li);
        });