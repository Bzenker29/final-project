const getSoccerData = async () => {
    try {
      return (await fetch("api/soccer/")).json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showSoccerData = async () => {
    let soccerData = await getSoccerData();
    let soccerDiv = document.getElementById("soccer-list");
    soccerDiv.innerHTML = "";

    soccerData.forEach((soccerItem, index) => {
        const section = document.createElement("section");
        section.classList.add("soccer-item");
        soccerDiv.append(section);

        // Add some margin to separate soccer items
        if (index > 0) {
            section.style.marginTop = "20px"; // Adjust this value as needed
        }

        const a = document.createElement("a");
        a.href = "#";
        section.append(a);

        const h3 = document.createElement("h3");
        h3.innerHTML = soccerItem.name;
        a.append(h3);

        const img = document.createElement("img");
        img.src = soccerItem.img;
        section.append(img);

        a.onclick = (e) => {
            e.preventDefault();
            displaySoccerDetails(soccerItem);
        };
    });
};

  
  const displaySoccerDetails = (soccerItem) => {
    const soccerDetails = document.getElementById("soccer-details");
    soccerDetails.innerHTML = "";
  
    const h3 = document.createElement("h3");
    h3.innerHTML = soccerItem.name;
    soccerDetails.append(h3);
  
    const deleteLink = document.createElement("a");
    deleteLink.innerHTML = "&#x2715;";
    soccerDetails.append(deleteLink);
    deleteLink.id = "delete-link";
  
    const editLink = document.createElement("a");
    editLink.innerHTML = "&#9998;";
    soccerDetails.append(editLink);
    editLink.id = "edit-link";
  
    const p = document.createElement("p");
    soccerDetails.append(p);
    p.innerHTML = soccerItem.description;
  
    const ul = document.createElement("ul");
    soccerDetails.append(ul);
    soccerItem.players.forEach((player) => {
      const li = document.createElement("li");
      ul.append(li);
      li.innerHTML = player;
    });
  
    editLink.onclick = (e) => {
      e.preventDefault();
      document.querySelector(".dialog").classList.remove("transparent");
      document.getElementById("add-edit-title").innerHTML = "Edit Soccer Item";
    };
  
    deleteLink.onclick = (e) => {
      e.preventDefault();
      deleteSoccerItem(soccerItem);
    };
  
    populateEditForm(soccerItem);
  };
  
  const deleteSoccerItem = async (soccerItem) => {
    let response = await fetch(`/api/soccer/${soccerItem._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
  
    if (response.status != 200) {
      console.log("error deleting");
      return;
    }
  
    let result = await response.json();
    showSoccerData();
    document.getElementById("soccer-details").innerHTML = "";
    resetForm();
  };
  
  const populateEditForm = (soccerItem) => {
    const form = document.getElementById("add-edit-soccer-form");
    form._id.value = soccerItem._id;
    form.name.value = soccerItem.name;
    form.description.value = soccerItem.description;
    populatePlayers(soccerItem);
  };
  
  const populatePlayers = (soccerItem) => {
    const section = document.getElementById("player-boxes");
  
    soccerItem.players.forEach((player) => {
      const input = document.createElement("input");
      input.type = "text";
      input.value = player;
      section.append(input);
    });
  };
  
  const addEditSoccerItem = async (e) => {
    e.preventDefault();
    const form = document.getElementById("add-edit-soccer-form");
    const formData = new FormData(form);
    let response;
    formData.append("players", getPlayers());
  
    // Adding a new soccer item
    if (form._id.value == -1) {
      formData.delete("_id");
  
      response = await fetch("/api/soccer", {
        method: "POST",
        body: formData,
      });
    }
    // Editing an existing soccer item
    else {
      console.log(...formData);
  
      response = await fetch(`/api/soccer/${form._id.value}`, {
        method: "PUT",
        body: formData,
      });
    }
  
    // Successful data retrieval from server
    if (response.status != 200) {
      console.log("Error posting data");
    }
  
    soccerItem = await response.json();
  
    if (form._id.value != -1) {
      displaySoccerDetails(soccerItem);
    }
  
    resetForm();
    document.querySelector(".dialog").classList.add("transparent");
    showSoccerData();
  };
  
  const getPlayers = () => {
    const inputs = document.querySelectorAll("#player-boxes input");
    let players = [];
  
    inputs.forEach((input) => {
      players.push(input.value);
    });
  
    return players;
  };
  
  const resetForm = () => {
    const form = document.getElementById("add-edit-soccer-form");
    form.reset();
    form._id = "-1";
    document.getElementById("player-boxes").innerHTML = "";
  };
  
  const showHideAdd = (e) => {
    e.preventDefault();
    document.querySelector(".dialog").classList.remove("transparent");
    document.getElementById("add-edit-title").innerHTML = "Add Soccer Item";
    resetForm();
  };
  
  const addPlayer = (e) => {
    e.preventDefault();
    const section = document.getElementById("player-boxes");
    const input = document.createElement("input");
    input.type = "text";
    section.append(input);
  };


  const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
};


  window.onload = () => {
    showSoccerData();
    document.getElementById("add-edit-soccer-form").onsubmit = addEditSoccerItem;
    document.getElementById("add-link").onclick = showHideAdd;
  
    document.querySelector(".close").onclick = () => {
      document.querySelector(".dialog").classList.add("transparent");
    };
  
    document.getElementById("add-player").onclick = addPlayer;

    document.getElementById("nav-toggle").onclick = toggleNav;
  };
  
  