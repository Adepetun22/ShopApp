#!/bin/bash

# Git History Cleanup Script for Removing Sensitive .env File
# Run this script to remove backend/.env from git history

echo "⚠️  WARNING: This will rewrite git history!"
echo "If you've pushed to a remote, you'll need to force push."
echo ""
read -p "Continue? (y/n): " confirm

if [ "$confirm" != "y" ]; then
    echo "Aborted."
    exit 1
fi

# Method 1: Using git filter-branch (pre-installed with git)
echo ""
echo "Step 1: Removing .env from git history using git filter-repo..."
echo "(Installing git-filter-repo if needed...)"

# Check if git-filter-repo is available, install if not
if ! command -v git-filter-repo &> /dev/null; then
    # Try installing via pip
    if command -v pip3 &> /dev/null; then
        pip3 install --user git-filter-repo
    elif command -v pip &> /dev/null; then
        pip install --user git-filter-repo
    else
        echo "git-filter-repo not found. Using alternative method..."
        USE_ALTERNATIVE=true
    fi
fi

if [ "$USE_ALTERNATIVE" != "true" ]; then
    # Use git-filter-repo (recommended)
    git filter-repo --path backend/.env --invert-paths --force
    echo "✅ Done!"
else
    # Alternative: Use git filter-branch (older, slower)
    echo "Using git filter-branch (slower method)..."
    git filter-branch --force --index-filter \
        'git rm --cached --ignore-unmatch backend/.env' \
        --prune-empty --tag-name-filter cat -- --all
    
    echo "✅ Done!"
fi

echo ""
echo "Step 2: Cleaning up reflog..."
git reflog expire --expire=now --all
git gc --prune=now --aggressive

echo ""
echo "Step 3: Removing backup tags..."
git tag -d $(git tag -l) 2>/dev/null || true

echo ""
echo "✅ Git history cleanup complete!"
echo ""
echo "📋 NEXT STEPS:"
echo "1. Update backend/.env with new credentials"
echo "2. Force push to remote (if applicable):"
echo "   git push --force origin main"
echo ""
echo "⚠️  IMPORTANT: All collaborators must re-clone the repository!"
echo "   They cannot simply pull after this history rewrite."

