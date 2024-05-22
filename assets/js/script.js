document.addEventListener('DOMContentLoaded', () => {
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function createPartition(parent, direction) {
        const partition1 = document.createElement('div');
        const partition2 = document.createElement('div');
        partition1.className = 'partition';
        partition2.className = 'partition';
        partition1.style.backgroundColor = parent.style.backgroundColor;
        partition2.style.backgroundColor = getRandomColor();

        if (direction === 'V') {
            parent.style.display = 'flex';
            partition1.style.flex = '1';
            partition2.style.flex = '1';
            parent.appendChild(partition1);
            parent.appendChild(partition2);
        } else if (direction === 'H') {
            parent.style.flexDirection = 'column';
            partition1.style.flex = '1';
            partition2.style.flex = '1';
            parent.appendChild(partition1);
            parent.appendChild(partition2);
        }

        addButtons(partition1);
        addButtons(partition2);

        partition1.classList.add('resizable');
        partition2.classList.add('resizable');
        addRemoveButton(partition1);
        addRemoveButton(partition2);
    }

    function addButtons(partition) {
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'buttons';

        const splitVButton = document.createElement('button');
        splitVButton.className = 'split-v';
        splitVButton.textContent = 'V';
        splitVButton.addEventListener('click', () => createPartition(partition, 'V'));

        const splitHButton = document.createElement('button');
        splitHButton.className = 'split-h';
        splitHButton.textContent = 'H';
        splitHButton.addEventListener('click', () => createPartition(partition, 'H'));

        buttonContainer.appendChild(splitVButton);
        buttonContainer.appendChild(splitHButton);

        partition.appendChild(buttonContainer);
    }

    function addRemoveButton(partition) {
        const removeButton = document.createElement('button');
        removeButton.className = 'remove';
        removeButton.textContent = '-';
        removeButton.addEventListener('click', () => {
            if (partition.parentElement) {
                partition.parentElement.removeChild(partition);
            }
        });

        partition.appendChild(removeButton);
    }

    const container = document.getElementById('container');
    container.style.backgroundColor = getRandomColor();
    addButtons(container);
});
