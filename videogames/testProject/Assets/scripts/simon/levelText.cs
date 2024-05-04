/*
 * Geneates text that displays the player's level and game over status
 * 
 * Nicole Dávila
 * 03-05-2024
 */

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class levelText : MonoBehaviour
{
    Text textComponent;
    TextMeshProUGUI textMeshProComponent;

    void Start()
    {
        // Try to get the Text component first
        textComponent = GetComponent<Text>();

        // If Text component is null, try to get the TextMeshPro component
        if (textComponent == null)
        {
            textMeshProComponent = GetComponent<TextMeshProUGUI>();
        }
    }

    public void UpdateText(int level, bool gameOver)
    {
        // Check if either textComponent or textMeshProComponent is available
        if (textComponent != null)
        {
            if (gameOver)
            {
                textComponent.text = "Game Over";
            }
            else
            {
                textComponent.text = "Level: " + level;
            }
        }
        else if (textMeshProComponent != null)
        {
            if (gameOver)
            {
                textMeshProComponent.text = "Game Over";
            }
            else
            {
                textMeshProComponent.text = "Level: " + level;
            }
        }
        else
        {
            Debug.LogError("No Text or TextMeshPro component found on GameObject.");
        }
    }
}

