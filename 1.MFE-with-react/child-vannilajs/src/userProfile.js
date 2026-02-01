import './styles.css';

const mount = (el) => {
    let user = {
        name: 'Admin User',
        email: 'admin@pharmacy-portal.com',
        role: 'Administrator',
        image: 'https://via.placeholder.com/150'
    };

    const render = () => {
        el.innerHTML = `
            <div class="user-profile-container">
                <div class="profile-header">
                    <h3>User Profile</h3>
                    <button id="close-profile">×</button>
                </div>
                
                <div class="profile-content">
                    <div class="profile-image-section">
                        <img src="${user.image}" alt="Profile" id="profile-img-display" />
                        <label for="profile-upload" class="upload-btn">Change Photo</label>
                        <input type="file" id="profile-upload" accept="image/*" style="display: none;" />
                    </div>

                    <div class="profile-details">
                        <div class="input-group">
                            <label>Name</label>
                            <input type="text" value="${user.name}" readonly disabled />
                        </div>
                         <div class="input-group">
                            <label>Email</label>
                            <input type="email" value="${user.email}" readonly disabled />
                        </div>
                         <div class="input-group">
                            <label>Role</label>
                            <input type="text" value="${user.role}" readonly disabled />
                        </div>
                    </div>

                    <div class="security-section">
                        <h4>Security</h4>
                        <div class="input-group">
                             <label>New Password</label>
                             <input type="password" id="new-password" placeholder="Enter new password" />
                        </div>
                        <button id="reset-password-btn" class="action-btn">Reset Password</button>
                    </div>
                </div>
            </div>
        `;

        // Attach Event Listeners
        const uploadInput = el.querySelector('#profile-upload');
        const imgDisplay = el.querySelector('#profile-img-display');
        
        uploadInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    user.image = e.target.result;
                    imgDisplay.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });

        const resetBtn = el.querySelector('#reset-password-btn');
        resetBtn.addEventListener('click', () => {
            const newPass = el.querySelector('#new-password').value;
            if(newPass) {
                alert('Password reset successfully (Mock Action)');
                el.querySelector('#new-password').value = '';
            } else {
                alert('Please enter a password');
            }
        });

        // Optional: Close button logic (needs coordination with host usually, but we'll add a simple event dispatch)
        const closeBtn = el.querySelector('#close-profile');
        closeBtn.addEventListener('click', () => {
           const event = new CustomEvent('closeRequest', { bubbles: true });
           el.dispatchEvent(event);
        });
    };

    render();
};

export { mount };
