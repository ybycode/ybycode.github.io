{ pkgs ? import <nixpkgs> {} }:

let
  project_dir = toString ./.;
in pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_23
  ];

  shellHook = ''
    # Set up a local global install directory for npm
    export NPM_CONFIG_PREFIX=${project_dir}/.npm-global
    mkdir -p "$NPM_CONFIG_PREFIX"

    # Add installed binaries to the PATH
    export PATH="${project_dir}/node_modules/.bin:$NPM_CONFIG_PREFIX/bin:$PATH"

    # Install the astro CLI if not here yet
    if [[ ! -f "${project_dir}/node_modules/.bin/astro" ]]; then
      echo "astro binary not found, installing it..."
      npm install astro
    fi
  '';
}
