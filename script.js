const showToast = (message) => {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 800);
};

const fetchData = (action) => {
    return fetch(`${url}/action?q=${action}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.text()
        })
        .then(data => {
            showToast(`event: ${data}`)
            console.log('Response:', data)
        })
        .catch(error => {
            console.error('Error:', error)
        })
}

// Example of using the fetchData function for each action
const rolli = async (button) => {
    button.disabled = true
    await fetchData('ri')
    button.disabled = false
}

const rolld = async (button) => {
    button.disabled = true
    await fetchData('rd')
    button.disabled = false
}

const pitchi = async (button) => {
    button.disabled = true
    await fetchData('pi')
    button.disabled = false
}

const pitchd = async (button) => {
    button.disabled = true
    await fetchData('pd')
    button.disabled = false
}

const yawi = async (button) => {
    button.disabled = true
    await fetchData('yi')
    button.disabled = false
}

const yawd = async (button) => {
    button.disabled = true
    await fetchData('yd')
    button.disabled = false
}

const reset1 = async (button) => {
    button.disabled = true
    await fetchData('r1')
    button.disabled = false
}

const reset2 = async (button) => {
    button.disabled = true
    await fetchData('r2')
    button.disabled = false
}
