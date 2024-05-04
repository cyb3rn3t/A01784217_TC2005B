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
    TextMeshProUGUI textMeshProComponent;

    void Start()
    {
        // Try to get the TextMeshPro component
        textMeshProComponent = GetComponent<TextMeshProUGUI>();
        if (textMeshProComponent == null)
        {
            Debug.LogError("No TextMeshPro component found on GameObject.");
        }
    }

    public void UpdateText(int level, bool gameOver)
    {
        if (textMeshProComponent != null)
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
    }
}

