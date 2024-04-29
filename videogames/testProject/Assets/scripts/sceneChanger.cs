/*
 * Script to change scenes
 * Used from the UI Buttons
 * 
 * Nicole Dávila
 * 23-04-2024
 */

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SceneChanger : MonoBehaviour
{
    // Load the scene with the given name
    public static void GoTo(string sceneName)
    {
        UnityEngine.SceneManagement.SceneManager.LoadScene(sceneName);
    }
}
