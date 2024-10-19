  const membersContainer = document.getElementById("members-container");

      fetch("/api/DataBasket.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          data.basketballp2b.Member.forEach((member) => {
            const memberDiv = document.createElement("div");
            memberDiv.classList.add(
              "text-center",
              "bg-white",
              "rounded-lg",
              "shadow-lg",
              "p-6",
              "member"
            );

            const img = document.createElement("img");
            img.className = "w-32 h-32 object-cover rounded-full mx-auto";
            img.src = member.profile_image;
            img.alt = `${member.name}'s profile image`;

            const name = document.createElement("h2");
            name.className = "mt-4 text-xl font-bold text-gray-800";
            name.textContent = member.name;

            const position = document.createElement("h3");
            position.className = "text-gray-600 mt-2";
            position.textContent = member.position;

            const role = document.createElement("h4");
            role.className = "hidden";
            role.textContent = member.role;

            const score = document.createElement("p");
            score.className = "hidden";
            score.textContent = member.score;

            memberDiv.appendChild(img);
            memberDiv.appendChild(name);
            memberDiv.appendChild(position);
            memberDiv.appendChild(role);
            memberDiv.appendChild(score);
            membersContainer.appendChild(memberDiv);
          });
        })
        .catch((error) => {
          console.error("Error fetching the data:", error);
        });

      const popup = document.getElementById("popup");
      const closePopup = document.getElementById("close-popup");

      function showPopup(title, content, score, image) {
        document.getElementById("popup-title").innerText = title;
        document.getElementById("popup-info").innerText = content;
        document.getElementById("popup-score").innerText = score;
        document.getElementById("popup-image").src = image;
        popup.classList.remove("hidden");
      }

      closePopup.addEventListener("click", () => {
        popup.classList.add("hidden");
      });

      membersContainer.addEventListener("click", (event) => {
        const memberDiv = event.target.closest(".member");
        if (memberDiv) {
          const memberName = memberDiv.querySelector("h2").innerText;
          const memberRole = memberDiv.querySelector("h4").innerText;
          const memberImage = memberDiv.querySelector("img").src;
          const memberScore = memberDiv.querySelector("p").innerText;
          showPopup(memberName, memberRole,  `Score: ${memberScore}`, memberImage);
        }
      });