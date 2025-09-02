public function login() {
    $userModel = new AuthUserModel();
    $user = $userModel->where('email', $this->request->getVar('email'))->first();

    if ($user && password_verify($this->request->getVar('password'), $user['password'])) {
        $token = generateJWT($user['id']);
        return $this->response->setJSON(['token' => $token]);
    }
    return $this->response->setJSON(['error' => 'Invalid credentials']);
}
