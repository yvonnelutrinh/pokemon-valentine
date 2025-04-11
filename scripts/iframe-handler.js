// new capture logic handling embedded iframe behaviour
function isInIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

// event listener for the download button
function setupDownloadButton() {
    const downloadButton = document.getElementById("download-button");

    if (downloadButton) {
        downloadButton.addEventListener("click", () => {
            // check if the page is inside an iframe
            if (isInIframe()) {
                // if so, open the page in a new tab and alert the user
                alert("Download doesn't work here. Opening in a new tab...");
                window.open(window.location.href, "_blank");
                return;
            }

            // if not inside an iframe, directly run the capture logic
            captureAndDownloadImage();
        });
    }
}

// handle image capture and download
function captureAndDownloadImage() {
    const section = document.getElementById("download");

    if (section) {
        html2canvas(section, { useCORS: true })
            .then((canvas) => {
                const link = document.createElement("a");
                link.href = canvas.toDataURL("image/png");
                link.download = "pokemon-valentine.png";
                link.click();
            })
            .catch((error) => {
                console.error("Error capturing the section:", error);
            });
    } else {
        console.error("The section with id 'download' was not found.");
    }
}

setupDownloadButton();
